package com.orgin.model;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.FieldDefaults;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.UUID;

@NoArgsConstructor
@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Reservation {
    String name;
    String email;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    Date date;
    String time;
    String confirmationNumber;

    public Reservation(String name, String email, Date date, String time) {
        this.name = name;
        this.email = email;
        this.date = date;
        this.time = time;
        this.confirmationNumber = generateConfirmationNumber();
    }

    public String generateConfirmationNumber() {
        return UUID.randomUUID().toString().substring(0, 8);
    }
}
