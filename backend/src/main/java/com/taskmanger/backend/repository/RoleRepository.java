package com.taskmanger.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.taskmanger.backend.entity.Role;

public interface RoleRepository extends JpaRepository<Role,Long>{

    Optional<Role> findByName(String name);
}
