package com.agriloan.agriloan;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
@OpenAPIDefinition(
		info =@Info(
				title = "Agro Funds",
				version = "1.1.2",
				description = "Agriculture Funding",
				contact = @Contact(
						name = "Govarthan R T",
						email = "govathanmaithu96@gmail.com"
						)
				)
		)
public class AgriloanApplication {

	public static void main(String[] args) {
		SpringApplication.run(AgriloanApplication.class, args);
	}

}

