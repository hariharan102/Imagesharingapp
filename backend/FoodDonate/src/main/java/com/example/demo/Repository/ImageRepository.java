package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Image;


@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {
}
