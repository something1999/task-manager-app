package com.taskmanger.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.taskmanger.backend.entity.Task;
import com.taskmanger.backend.repository.TaskRepository;

@Service
public class TaskServiceImpl implements TaskService {

    private final TaskRepository taskRepository;

    @Autowired
    public TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Override
    public List<Task> getTasks() {
        return taskRepository.findAll();
    }

    // public List<Task> getTasksByPage() {
        
    // }

    @Override
    public Optional<Task> getTaskById(long id) {
        return taskRepository.findById(id);
    }

    @Override
    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    @Override
    public Task updateTask(long id, Task task) {
        task.setId(id);
        return taskRepository.save(task);
    }

    @Override
    public Optional<Task> deleteTask(Long id) {
        Optional<Task> task = getTaskById(id);
        task.ifPresent(taskRepository::delete);
        return task;
    }

}
