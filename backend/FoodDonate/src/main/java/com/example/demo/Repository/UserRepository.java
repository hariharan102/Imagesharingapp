package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.Entity.UserRegister;

public interface UserRepository extends JpaRepository<UserRegister, Long> {
}
