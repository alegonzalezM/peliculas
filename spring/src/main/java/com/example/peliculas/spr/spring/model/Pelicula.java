package com.example.peliculas.spr.spring.model;
import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "peliculas")

    public class Pelicula {
    
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Integer id_pelicula;
        private String titulo;
        private String director;
        private Date fecha_estreno;
        private String poster;
        private Date duracion;
        private String genero;
    
        // Getters y setters
    
        public String getGenero() {
            return genero;
        }

        public void setPoster(String poster) {
            this.poster = poster;
        }

        public String getPoster() {
            return poster;
        }

        public Integer getId_pelicula() {
            return id_pelicula;
        }
    
        public void setId(Integer id_pelicula) {
            this.id_pelicula = id_pelicula;
        }
    
        public String getTitulo() {
            return titulo;
        }
    
        public void setTitulo(String titulo) {
            this.titulo = titulo;
        }
    
        public String getDirector() {
            return director;
        }
    
        public void setDirector(String director) {
            this.director = director;
        }
    
        public Date getFecha_estreno() {
            return fecha_estreno;
        }
    
        public void setFecha_estreno(Date fecha_estreno) {
            this.fecha_estreno = fecha_estreno;
        }

    public Date getDuracion() {
        return duracion;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }
    }
    
