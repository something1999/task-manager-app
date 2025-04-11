package com.taskmanger.backend.service;

import java.util.List;
import java.util.Optional;

import com.taskmanger.backend.entity.Task;

public interface TaskService {
    List<Task> getTasks();  // This is already implemented in TaskServiceImpl
    Optional<Task> getTaskById(long id); // This is already implemented in TaskServiceImpl
    Task createTask(Task task);
    Task updateTask(long id, Task task);
    Optional<Task> deleteTask(Long id);
}
