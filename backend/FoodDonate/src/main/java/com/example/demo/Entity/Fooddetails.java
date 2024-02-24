package com.example.demo.Entity;

import java.time.LocalTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Fooddetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String foodType;
    private double quantity;
    private LocalTime pickupTime;
    private String address;
    private String email;
    private String mobileNo;
    private String nearestLandmark;
    private String bestContactTime;
    private String preferredContactMethod;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getFoodType() {
		return foodType;
	}
	public void setFoodType(String foodType) {
		this.foodType = foodType;
	}
	public double getQuantity() {
		return quantity;
	}
	public void setQuantity(double quantity) {
		this.quantity = quantity;
	}
	public LocalTime getPickupTime() {
		return pickupTime;
	}
	public void setPickupTime(LocalTime pickupTime) {
		this.pickupTime = pickupTime;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
	public String getNearestLandmark() {
		return nearestLandmark;
	}
	public void setNearestLandmark(String nearestLandmark) {
		this.nearestLandmark = nearestLandmark;
	}
	public String getBestContactTime() {
		return bestContactTime;
	}
	public void setBestContactTime(String bestContactTime) {
		this.bestContactTime = bestContactTime;
	}
	public String getPreferredContactMethod() {
		return preferredContactMethod;
	}
	public void setPreferredContactMethod(String preferredContactMethod) {
		this.preferredContactMethod = preferredContactMethod;
	}
	public Fooddetails(Long id, String foodType, double quantity, LocalTime pickupTime, String address, String email,
			String mobileNo, String nearestLandmark, String bestContactTime, String preferredContactMethod) {
		super();
		this.id = id;
		this.foodType = foodType;
		this.quantity = quantity;
		this.pickupTime = pickupTime;
		this.address = address;
		this.email = email;
		this.mobileNo = mobileNo;
		this.nearestLandmark = nearestLandmark;
		this.bestContactTime = bestContactTime;
		this.preferredContactMethod = preferredContactMethod;
	}
	public Fooddetails() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    

	
}