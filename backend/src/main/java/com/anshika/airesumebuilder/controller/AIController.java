package com.anshika.airesumebuilder.controller;

import com.anshika.airesumebuilder.dto.AIRequestDTO;
import com.anshika.airesumebuilder.dto.AIResponseDTO;
import com.anshika.airesumebuilder.service.AIService;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ai")
@RequiredArgsConstructor
public class AIController {

    private final AIService aiService;

    @PostMapping("/improve")
    public AIResponseDTO improve(@RequestBody AIRequestDTO request) {
        String improved = aiService.improveContent(request);
        return new AIResponseDTO(improved);
    }
}
