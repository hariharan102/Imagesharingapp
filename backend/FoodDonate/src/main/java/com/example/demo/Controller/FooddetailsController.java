package com.example.demo.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Fooddetails;
import com.example.demo.Service.FooddetailsService;



@CrossOrigin("*")
@RequestMapping("/fooddetails")
@RestController
public class FooddetailsController {
	@Autowired
	private FooddetailsService fooddetailsService;
	@GetMapping("/getfooddetails")
	public List<Fooddetails> getUserRegister(){
		return fooddetailsService.getUserRegister();
	}
	
	@PostMapping("/postfooddetails")
	public void postUserRegister(@RequestBody Fooddetails ure) {
		fooddetailsService.postUserRegister(ure);
	}
	
	

}