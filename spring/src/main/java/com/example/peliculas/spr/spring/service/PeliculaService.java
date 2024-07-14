package com.example.peliculas.spr.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.peliculas.spr.spring.dao.PeliculaRepository;
import com.example.peliculas.spr.spring.model.Pelicula;

@Service
public class PeliculaService {


@Autowired
    private PeliculaRepository peliculaRepository;

    public List<Pelicula> obtenerTodasLasPeliculas() {
        return peliculaRepository.findAll();
    }

    public List<Pelicula> obtenerPeliculas() {
        return peliculaRepository.findAll();
    }

    public Pelicula agregarPelicula(Pelicula pelicula) {
        return peliculaRepository.save(pelicula);
    }

    public void deletePelicula(Integer id_pelicula) {
        peliculaRepository.deleteById(id_pelicula);
    }
}



