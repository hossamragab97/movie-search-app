import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  apiKey = '95a9fcd369b78a1647a4e494b721a944'
  baseUrl = 'https://api.themoviedb.org/3/search/movie'
  pathImg = 'https://image.tmdb.org/t/p/w500'
  noImg = 'https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=P1DebpeMIAtXj_ZbVsKVvg-duuL0v9DlrOZUvPG6UJk='

  isLight = true
  searchControl = new FormControl();
  searchText: string = '';
  movies: any = [];
  totalRecords = 0
  isSearch = false

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.fetchMovies(value, 1);
      });


    let theme = localStorage.getItem('them') ?? 'dark'
    const element = document.querySelector('html') as HTMLElement;
    if (theme == 'light') {
      this.isLight = true
      element.classList.remove('my-app-dark');
    } else {
      this.isLight = false
      element.classList.add('my-app-dark');
    }


    this.searchText = this.getRandomQuery();
    this.fetchMovies(this.searchText, 1);

  }


  getRandomQuery(): string {
    const words = ['Avengers', 'Batman', 'Spiderman', 'Matrix', 'Joker', 'Titanic', 'Inception', 'Alien'];
    return words[Math.floor(Math.random() * words.length)];
  }

  fetchMovies(query: string, page: number) {
    this.isSearch = true
    this.http.get(`${this.baseUrl}?api_key=${this.apiKey}&query=${query}&page=${page}`)
      .subscribe((response: any) => {
        this.movies = response.results;
        this.movies.forEach((movie: any) => {
          movie.vote_average = Number(movie.vote_average.toFixed(1));
        });
        this.totalRecords = response.total_results
        document.getElementById('movies')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.isSearch = false
      });
  }

  onPageChange(event: any) {
    this.fetchMovies(this.searchText, event.page + 1)
  }


  toggleDarkMode() {
    if (!localStorage.getItem('them') || localStorage.getItem('them') == 'light') {
      this.isLight = false
      localStorage.setItem('them', 'dark')
    } else {
      this.isLight = true
      localStorage.setItem('them', 'light')
    }
    const element = document.querySelector('html') as HTMLElement;
    element.classList.toggle('my-app-dark');
  }


}
