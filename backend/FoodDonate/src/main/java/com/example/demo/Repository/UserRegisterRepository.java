package com.example.demo.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.UserRegister;

public interface UserRegisterRepository extends JpaRepository<UserRegister,Long>{
	Optional<UserRegister>findByUsername(String username);
}