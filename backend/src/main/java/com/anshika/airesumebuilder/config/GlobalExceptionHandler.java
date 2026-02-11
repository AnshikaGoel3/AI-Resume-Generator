package com.anshika.airesumebuilder.config;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handleException(Exception ex) {
        return ResponseEntity.status(500).body(
                Map.of(
                        "error", "Something went wrong while processing AI request.",
                        "message", ex.getMessage()
                )
        );
    }
}
