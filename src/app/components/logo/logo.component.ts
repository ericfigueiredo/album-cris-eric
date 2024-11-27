import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GithubService} from '../../_services/github.service';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent implements OnInit{
constructor(private githuService: GithubService){

}

ngOnInit(): void {
    this.githuService.getUsuarios().subscribe({
      next: (response) => {
        console.log(response);
      }
    })
}
}
