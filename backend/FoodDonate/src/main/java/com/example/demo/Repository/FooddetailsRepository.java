package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Fooddetails;



public interface FooddetailsRepository extends JpaRepository<Fooddetails, Long>{

}