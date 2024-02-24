package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.FeedbackReport;


public interface FeedbackReportRepository extends JpaRepository<FeedbackReport, Long> {
}
