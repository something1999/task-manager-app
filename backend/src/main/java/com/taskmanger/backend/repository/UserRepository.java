package com.taskmanger.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.taskmanger.backend.entity.User;

public interface UserRepository extends JpaRepository<User,Long>{

}
