package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Fooddetails;
import com.example.demo.Repository.FooddetailsRepository;




@Service
public class FooddetailsService {

	@Autowired
	private FooddetailsRepository fooddetailsRepository;
	public List<Fooddetails> getUserRegister(){
		return fooddetailsRepository.findAll();
	}
	public Optional<Fooddetails> getUserRegisterbyId(int id)
	{
		return fooddetailsRepository.findById((long) id);
	}
	public void postUserRegister(Fooddetails ure) {
		fooddetailsRepository.save(ure);
	}
	public Fooddetails putUserRegister(Fooddetails ure) {
		return fooddetailsRepository.save(ure);
	}
	public void deleteUserRegister(int id) {
		fooddetailsRepository.deleteById((long) id);
	}
}