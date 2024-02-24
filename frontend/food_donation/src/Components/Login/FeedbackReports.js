import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ".//FeedbackReports.css"

const FeedbackReports = () => {
  const [reports, setReports] = useState([]);
  const [groupedReports, setGroupedReports] = useState({});
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);

  useEffect(() => {
    // Fetch feedback reports on component mount
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;

    axios.get('http://localhost:8080/api/reports')
      .then(response => {
        setReports(response.data);
      })
      .catch(error => {
        console.error('Error fetching feedback reports:', error);
      });
  }, []);

  useEffect(() => {
    // Group reports by year and month when reports change
    setGroupedReports(groupReportsByYearAndMonth());
  }, [reports]);

  const groupReportsByYearAndMonth = () => {
    const groupedReports = {};

    reports.forEach(report => {
      const year = new Date(report.date).getFullYear();
      const month = new Date(report.date).toLocaleString('default', { month: 'long' });

      if (!groupedReports[year]) {
        groupedReports[year] = {};
      }

      if (!groupedReports[year][month]) {
        groupedReports[year][month] = [];
      }

      groupedReports[year][month].push(report);
    });

    return groupedReports;
  };

  const handleYearClick = (year) => {
    setSelectedYear(selectedYear === year ? null : year);
    setSelectedMonth(null); // Reset selectedMonth when a new year is clicked
  };

  const handleMonthClick = (month) => {
    setSelectedMonth(selectedMonth === month ? null : month);
  };

  return (
    <div className="feedback-reports-container">
      <h2>Feedback Reports</h2>
      {Object.keys(groupedReports).length > 0 && (
        Object.keys(groupedReports).map(year => (
          <div key={year} className="year-container">
            <h3 onClick={() => handleYearClick(year)}>{year}</h3>
            {selectedYear === year && (
              <div className="months-list">
                {Object.keys(groupedReports[year]).map(month => (
                  <div key={month} className="month-container">
                    <h4 onClick={() => handleMonthClick(month)}>{month}</h4>
                    {selectedMonth === month && (
                      <div className="report-list">
                        {groupedReports[year][month].map(report => (
                          <div key={report.id} className="report-item">
                            <p>Date: {report.date}</p>
            <p>Name: {report.concerns}</p>
            <p>Time: {report.time}</p>
            <p>Case: {report.interactionType}</p>
            <p>Officers: {report.officers}</p>
            <p>Description: {report.description}</p>
            <p>Satisfaction: {report.satisfaction}</p>
            <p>Behavior: {report.behavior}</p>
            {/* Displaying evidence might require a different approach based on your requirements */}
            {/* For simplicity, assuming evidence is an image */}
            <p>Anonymous: {report.isAnonymous ? 'Yes' : 'No'}</p>
            <p>Language: {report.language}</p>
            <p>Suggestions: {report.suggestions}</p>
            <p>Contact Info: {report.contactInfo}</p>
            <p>Location: {report.location}</p>
            <p>Auto Location: {report.autoLocation}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default FeedbackReports;
