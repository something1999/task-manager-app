package com.taskmanger.backend.service;

import java.util.List;
import java.util.Optional;

import com.taskmanger.backend.entity.User;

public interface UserService {

    public List<User> getUsers();
    public Optional<User> getUserById(long id);
}
