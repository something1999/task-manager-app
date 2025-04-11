package com.taskmanger.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.taskmanger.backend.entity.Task;

public interface TaskRepository extends JpaRepository<Task,Long> {

}
