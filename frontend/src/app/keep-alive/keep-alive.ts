import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KeepAliveService} from './keep-alive.service';

@Component({
  selector: 'app-keep-alive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './keep-alive.html',
  styleUrls: ['./keep-alive.css'],
})
export class KeepAlive implements OnInit, OnDestroy {
  private keepAliveService = inject(KeepAliveService);
  private intervalId: any;

  ngOnInit(): void {
    // call immediately, then every 30 seconds
    this.callKeepAlive();
    this.intervalId = setInterval(() => this.callKeepAlive(), 30_000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  private callKeepAlive(): void {
    // fire-and-forget the HTTP GET; subscribe to ensure the request is sent
    this.keepAliveService.keepAlive().subscribe({
      next: () => { /* noop */ },
      error: () => { /* noop */ },
    });
  }
}
