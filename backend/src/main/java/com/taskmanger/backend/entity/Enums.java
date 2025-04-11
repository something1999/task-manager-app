package com.taskmanger.backend.entity;

public class Enums {

    public enum TaskStatus {
        Open,
        Closed,
        In_progress,
        Completed;
    }
    public enum Priority {
        High,
        Medium,
        Low;
    }

    public enum Roles {
        Employee,
        Manager,
        Admin;
    }
}
