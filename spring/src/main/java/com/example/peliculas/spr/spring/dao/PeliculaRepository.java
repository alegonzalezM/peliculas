
package com.example.peliculas.spr.spring.dao;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.peliculas.spr.spring.model.Pelicula;

public interface PeliculaRepository extends JpaRepository<Pelicula, Integer> {
}
