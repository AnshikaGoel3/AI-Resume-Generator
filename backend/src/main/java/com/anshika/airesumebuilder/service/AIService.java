package com.anshika.airesumebuilder.service;

import com.anshika.airesumebuilder.dto.AIRequestDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;

import java.util.Map;

@Service
public class AIService {

    @Value("${groq.api.key}")
    private String apiKey;

    private final String GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

    public String improveContent(AIRequestDTO request) {

        RestTemplate restTemplate = new RestTemplate();

        String prompt = "Improve the following " + request.getSectionType() +
                " for a " + request.getTargetRole() +
                " resume. Make it professional, ATS-optimized and concise:\n\n" +
                request.getContent();

        Map<String, Object> body = Map.of(
                "model", "llama-3.3-70b-versatile",
                "messages", new Object[]{
                        Map.of("role", "user", "content", prompt)
                }
        );

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(apiKey);

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(body, headers);

        ResponseEntity<Map> response =
                restTemplate.postForEntity(GROQ_URL, entity, Map.class);

        Map choice = (Map) ((java.util.List) response.getBody().get("choices")).get(0);
        Map message = (Map) choice.get("message");

        return message.get("content").toString();
    }
}
