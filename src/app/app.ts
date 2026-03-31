import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface ContextFile {
  name: string;
  size: string;
  type: 'pdf' | 'csv';
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  isAnalyzing = signal(false);
  hasAnalysis = signal(false);
  
  contextFiles = signal<ContextFile[]>([
    { name: 'specs_v2.pdf', size: '1.2 MB', type: 'pdf' },
    { name: 'data_mapping.csv', size: '45 KB', type: 'csv' }
  ]);

  removeFile(fileName: string) {
    this.contextFiles.update(files => files.filter(f => f.name !== fileName));
  }

  startAnalysis() {
    this.isAnalyzing.set(true);
    // Simulate analysis delay
    setTimeout(() => {
      this.isAnalyzing.set(false);
      this.hasAnalysis.set(true);
    }, 2000);
  }
}
