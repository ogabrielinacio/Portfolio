import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  name: string;
  url: string;
  description: string;
  language: string;
  languageColor: string;
}

@Component({
  selector: 'app-github-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './github-projects.component.html',
  styleUrls: ['./github-projects.component.scss'],
})
export class GithubProjectsComponent {
  projects: Project[] = [
    {
      id: 0,
      name: 'SmartIrrigatorAPI',
      url: 'https://github.com/ogabrielinacio/SmartIrrigatorAPI',
      description: 'API for managing smart irrigation system',
      language: 'C#',
      languageColor: '#178600',
    },
    {
      id: 1,
      name: 'Portfolio',
      url: 'https://github.com/ogabrielinacio/Portfolio',
      description: 'Simple Portfolio built in Angular',
      language: 'TypeScript',
      languageColor: '#2b7489',
    },
    {
      id: 2,
      name: 'Terraform-EC2-MQTT-HTTPS',
      url: 'https://github.com/ogabrielinacio/Terraform-EC2-MQTT-HTTPS',
      description: `Terraform modules to set up an EC2 
      instance configured for MQTT and HTTPS protocols`,
      language: 'HCL',
      languageColor: '#2b7489',
    },
    {
      id: 3,
      name: 'MqttBridge',
      url: 'https://github.com/ogabrielinacio/MqttBridge',
      description: 'MQTT Bridge of SmartIrrigator',
      language: 'Go',
      languageColor: '#00ADD8',
    },
    {
      id: 4,
      name: 'esp_provisioning_ble',
      url: 'https://github.com/ogabrielinacio/esp_provisioning_ble',
      description: 'A Flutter plugin for provisioning ESP32 modules with BLE',
      language: 'Dart',
      languageColor: '#00B4AB',
    },
    {
      id: 5,
      name: 'go-graphql',
      url: 'https://github.com/ogabrielinacio/go-graphql',
      description:
        'A Golang API that utilizes GraphQL for managing courses and categorie',
      language: 'Go',
      languageColor: '#00ADD8',
    },
  ];
}
