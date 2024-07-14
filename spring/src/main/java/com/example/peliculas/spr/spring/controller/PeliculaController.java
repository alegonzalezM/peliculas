package com.example.peliculas.spr.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.example.peliculas.spr.spring.model.Pelicula;
import com.example.peliculas.spr.spring.service.PeliculaService;

@RestController
@RequestMapping("/api")
public class PeliculaController {

@Autowired
    private PeliculaService peliculaService;

@GetMapping("/")
    public ResponseEntity<List<Pelicula>> obtenerTodasLasPeliculas() {
        List<Pelicula> peliculas = peliculaService.obtenerTodasLasPeliculas(); // Implementa este método en tu servicio

        if (peliculas.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok().body(peliculas);
        }
    }
@GetMapping("/obtenerPeliculas")
    public ResponseEntity<List<Pelicula>> obtenerPeliculas() {
        List<Pelicula> peliculas = peliculaService.obtenerPeliculas();
        return ResponseEntity.ok(peliculas);
    }

@GetMapping("/listarPeliculas")
    public List<Pelicula> listarPeliculas() {
        return peliculaService.obtenerPeliculas();
    }
@Configuration
    public class WebConfig implements WebMvcConfigurer {
    
@Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
            .allowedOrigins("http://localhost:8088") // Cambia esto al puerto de tu cliente
            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
            .allowedHeaders("*")
            .allowCredentials(true);
        
    }}
@PostMapping("/agregarPelicula")
    public Pelicula agregarPelicula(@RequestBody Pelicula pelicula) {
      
        return peliculaService.agregarPelicula(pelicula);
    }

@DeleteMapping("/deletePelicula/{id_pelicula}")
    public void deletePelicula(@PathVariable Integer id_pelicula) {
        peliculaService.deletePelicula(id_pelicula);
    }
}


