package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.FeedbackReport;
import com.example.demo.Service.FeedbackReportService;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/reports")
public class FeedbackReportController {

    @Autowired
    private FeedbackReportService reportService;

    @PostMapping
    public ResponseEntity<?> submitFeedback(@RequestBody FeedbackReport feedbackReport) {
        try {
            FeedbackReport savedReport = reportService.submitFeedback(feedbackReport);
            return new ResponseEntity<>(savedReport, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Error submitting feedback", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity<List<FeedbackReport>> getAllReports() {
        List<FeedbackReport> reports = reportService.getAllReports();
        return new ResponseEntity<>(reports, HttpStatus.OK);
    }
}
