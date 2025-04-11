package com.taskmanger.backend.entity;

import java.time.LocalDateTime;
import java.util.List;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.taskmanger.backend.entity.Enums.Priority;
import com.taskmanger.backend.entity.Enums.TaskStatus;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "tasks")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;

    @ManyToOne
    @JoinColumn(name = "assigned_to", nullable = true)
    @OnDelete(action = OnDeleteAction.SET_NULL)
    private User assignedTo;

    @ManyToOne
    @JoinColumn(name = "reviewed_by", nullable = true)
    @OnDelete(action = OnDeleteAction.SET_NULL)
    private User reviewedBy;

    @ManyToOne
    @JoinColumn(name = "created_by", nullable = true)
    private User createdBy;

    @ManyToOne
    @JoinColumn(name = "updated_by", nullable = true)
    private User updatedBy;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    private Integer points;

    @Enumerated(EnumType.STRING)
    private TaskStatus status;

    @Enumerated(EnumType.STRING)
    private Priority priority;

    @OneToMany(mappedBy = "task", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Comment> comments;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }

    // Add getters and setters or use Lombok
}
