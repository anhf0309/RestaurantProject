package com.orgin.controller;

import com.orgin.model.Contact;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.HashMap;
import java.util.Map;

@Controller
public class ContactController {
    private Map<String, Contact> contactMap = new HashMap<>();

    @GetMapping("/contactus")
    public String showContactForm() {
        return "contactus";
    }

    @PostMapping("/submit_form")
    public String showForm(@ModelAttribute("contact") Contact contact, Model model) {
        model.addAttribute("name", contact.getName());
        model.addAttribute("email", contact.getEmail());
        return "submit_form";
    }
}
