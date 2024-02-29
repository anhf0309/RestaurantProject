package com.orgin.controller;

import com.orgin.model.Reservation;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import java.util.HashMap;
import java.util.Map;

@Controller
public class ReservationController {
    private final Map<String, Reservation> reservationMap = new HashMap<>();

    @GetMapping("/homepage")
    public String resForm() {
        return "homepage";
    }

    @GetMapping("/menu")
    public String showMenu() {
        return "menu";
    }

    @PostMapping("/reservation_form")
    public String showForm(@ModelAttribute("reservation") Reservation reservation, ModelMap model) {
       model.addAttribute("name",reservation.getName());
       model.addAttribute("email",reservation.getEmail());
       model.addAttribute("date",reservation.getDate());
       model.addAttribute("time",reservation.getTime());
       model.addAttribute("confirmationNumber",reservation.getConfirmationNumber());
        return "reservation_form";
    }
}
