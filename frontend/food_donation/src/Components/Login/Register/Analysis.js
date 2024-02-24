import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./FeedbackAnalysis.css"
import Footer from '../Footer';
import He from '../navbar';

const FeedbackAnalysis = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [classificationFilter, setClassificationFilter] = useState('all');
  const [selectedCaseType, setSelectedCaseType] = useState(null);

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;

    axios.get('http://localhost:8080/api/reports')
      .then(response => {
        const organizedData = organizeDataByDate(response.data);
        setFeedbackData(organizedData);
      })
      .catch(error => {
        console.error('Error fetching feedback data:', error);
      });
  }, []);

  const organizeDataByDate = (data) => {
    const organizedData = data.reduce((acc, feedback) => {
      const date = new Date(feedback.date);
      const year = date.getFullYear().toString();
      const month = date.toLocaleString('default', { month: 'long' });
      const monthIndex = date.getMonth();
      const day = date.getDate();
      const formattedDate = `${year}-${month}-${day}`;

      acc[year] = acc[year] || {};
      acc[year][month] = acc[year][month] || {};
      acc[year][month][formattedDate] = acc[year][month][formattedDate] || [];
      acc[year][month][formattedDate].push(feedback);

      acc[year].months = acc[year].months || [];
      if (!acc[year].months.includes(month)) {
        acc[year].months.splice(monthIndex, 0, month);
      }

      return acc;
    }, {});

    return organizedData;
  };

  const handleYearClick = (year) => {
    setSelectedYear(selectedYear === year ? null : year);
    setSelectedMonth(null);
    setSelectedDate(null);
    setClassificationFilter('all');
    setSelectedCaseType(null);
  };

  const handleMonthClick = (month) => {
    setSelectedMonth(selectedMonth === month ? null : month);
    setSelectedDate(null);
    setClassificationFilter('all');
    setSelectedCaseType(null);
  };

  const handleDateClick = (date) => {
    setSelectedDate(selectedDate === date ? null : date);
    setClassificationFilter('all');
    setSelectedCaseType(null);
  };

  const calculateSatisfactionStats = (feedbackList) => {
    const totalFeedbacks = feedbackList.length;
    const satisfiedCount = feedbackList.filter(feedback => feedback.satisfaction === 'satisfied').length;
    const neutralCount = feedbackList.filter(feedback => feedback.satisfaction === 'neutral').length;
    const dissatisfiedCount = feedbackList.filter(feedback => feedback.satisfaction === 'dissatisfied').length;

    return {
      total: totalFeedbacks,
      satisfied: satisfiedCount,
      neutral: neutralCount,
      dissatisfied: dissatisfiedCount,
    };
  };

  const satisfactionStats = selectedDate ? calculateSatisfactionStats(feedbackData[selectedYear][selectedMonth][selectedDate]) : null;

  const filterByCaseType = (feedbackList, caseType) => {
    return feedbackList.filter(feedback => feedback.interactionType === caseType);
  };

  const filterBySatisfaction = (feedbackList, satisfactionType) => {
    // If no case type is selected, apply satisfaction filter directly
    if (!selectedCaseType) {
      return feedbackList.filter(feedback => feedback.satisfaction === satisfactionType);
    }

    // Apply satisfaction filter within the selected case type
    const feedbacksForSelectedCaseType = filterByCaseType(feedbackList, selectedCaseType);
    return feedbacksForSelectedCaseType.filter(feedback => feedback.satisfaction === satisfactionType);
  };

  const filterFeedback = (feedbackList) => {
    switch (classificationFilter) {
      case 'satisfied':
        return filterBySatisfaction(feedbackList, 'satisfied');
      case 'neutral':
        return filterBySatisfaction(feedbackList, 'neutral');
      case 'dissatisfied':
        return filterBySatisfaction(feedbackList, 'dissatisfied');
      default:
        return feedbackList;
    }
  };

  const handleViewAllFeedbacks = (selectedYear) => {
    setSelectedYear(selectedYear);
    setSelectedMonth(null);
    setSelectedDate(null);
    setClassificationFilter('all');
    setSelectedCaseType(null);
  };

  const handleViewAllFeedbacksEntire = () => {
    setSelectedYear(null);
    setSelectedMonth(null);
    setSelectedDate(null);
    setClassificationFilter('all');
    setSelectedCaseType(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'interactionType') {
      setSelectedCaseType(value === '' ? null : value);
    }

    // ... rest of the handleChange logic
  };

  return (
    <>
    <He/>
    <div className="feedback-analysis-container">
      <h2>Feedback Analysis</h2>

      <div>
        <button onClick={handleViewAllFeedbacksEntire}>View All Feedbacks for Entire Dataset</button>
      </div>

      {Object.keys(feedbackData).map((year) => (
          <div key={year} className="feedback-year-container">
          <h3 onClick={() => handleYearClick(year)} style={{ cursor: 'pointer', color: 'blue' }}>
            {year}
          </h3>
          {selectedYear === year && (
              <div>
              <button onClick={() => handleViewAllFeedbacks(year)}>View All Feedbacks for {year}</button>

              {feedbackData[year].months
                .sort((a, b) => {
                    const monthsOrder = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                    return monthsOrder.indexOf(a) - monthsOrder.indexOf(b);
                })
                .map((month) => (
                    <div key={month} className="feedback-month-container">
                    <h4 onClick={() => handleMonthClick(month)} style={{ cursor: 'pointer', color: 'green' }}>
                      {month}
                    </h4>
                    {selectedMonth === month && (
                        <div>
                        {Object.keys(feedbackData[year][month]).map((date) => (
                            <div key={date} className="feedback-date-container">
                            <h5 onClick={() => handleDateClick(date)} style={{ cursor: 'pointer', color: 'red' }}>
                              {date}
                            </h5>
                            {selectedDate === date && (
                                <div>
                                <div>
                                  <label>
                                    Case Type:
                                    <select
                                      name="interactionType"
                                      value={selectedCaseType || ''}
                                      onChange={handleChange}
                                      >
                                      <option value="">Select case type</option>
                                      <option value="rape">Rape Case</option>
                                      <option value="robbery">Robbery Case</option>
                                      <option value="abuse">Abuse Case</option>
                                      <option value="murder">Murder Case</option>
                                      <option value="kidnap">Kidnap Case</option>
                                    </select>
                                  </label>

                                  <button onClick={() => setClassificationFilter('all')}>All</button>
                                  <button onClick={() => setClassificationFilter('satisfied')}>Satisfied</button>
                                  <button onClick={() => setClassificationFilter('neutral')}>Neutral</button>
                                  <button onClick={() => setClassificationFilter('dissatisfied')}>Dissatisfied</button>
                                </div>
                                <ul>
                                  {filterFeedback(feedbackData[year][month][date]).map(feedback => (
                                      <li key={feedback.id}>
                                          <div className="feedback-analysis-container">

                                      <p>Name: {feedback.concerns}</p>
                                      <p>Date: {feedback.date}</p>
                                      <p>Time: {feedback.time}</p>
                                      <p>Interaction Type: {feedback.interactionType}</p>
                                      <p>Officers: {feedback.officers}</p>
                                      <p>Description: {feedback.description}</p>
                                      <p>Satisfaction: {feedback.satisfaction}</p>
                                      <p>Behavior: {feedback.behavior}</p>
                                      {/* Displaying evidence might require a different approach based on your requirements */}
                                      {/* For simplicity, assuming evidence is an image */}
                                      <p>Anonymous: {feedback.isAnonymous ? 'Yes' : 'No'}</p>
                                      <p>Email: {feedback.language}</p>
                                      <p>Suggestions: {feedback.suggestions}</p>
                                      <p>Contact Info: {feedback.contactInfo}</p>
                                      <p>Location: {feedback.location}</p>
                                      <p>Auto Location: {feedback.autoLocation}</p>
                                          </div>
                                    </li>
                                  ))}
                                </ul>
                                {satisfactionStats && (
                                    <div>
                                    <h6>Satisfaction Statistics</h6>
                                    <p>Total Feedbacks: {satisfactionStats.total}</p>
                                    <p>Satisfied: {satisfactionStats.satisfied}</p>
                                    <p>Neutral: {satisfactionStats.neutral}</p>
                                    <p>Dissatisfied: {satisfactionStats.dissatisfied}</p>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
    <Footer/>
      </>
  );
};

export default FeedbackAnalysis;
