package com.example.demo.Service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.FeedbackReport;
import com.example.demo.Repository.FeedbackReportRepository;

@Service
public class FeedbackReportService {

    @Autowired
    private FeedbackReportRepository reportRepository;

    public FeedbackReport submitFeedback(FeedbackReport feedbackReport) {
        try {
            return reportRepository.save(feedbackReport);
        } catch (Exception e) {
            throw new RuntimeException("Error submitting feedback", e);
        }
    }

    public List<FeedbackReport> getAllReports() {
        return reportRepository.findAll();
    }
}