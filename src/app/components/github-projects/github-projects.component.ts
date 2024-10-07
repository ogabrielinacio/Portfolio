import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
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
      name: 'SmartIrrigatorAPI',
      url: 'https://github.com/ogabrielinacio/SmartIrrigatorAPI',
      description: 'API for managing smart irrigation system',
      language: 'C#',
      languageColor: '#178600',
    },
    {
      name: 'Portfolio',
      url: 'https://github.com/ogabrielinacio/Portfolio',
      description: 'Simple Portfolio built in Angular',
      language: 'TypeScript',
      languageColor: '#2b7489',
    },
    {
      name: 'esp_provisioning_ble',
      url: 'https://github.com/ogabrielinacio/esp_provisioning_ble',
      description: 'A Flutter plugin for provisioning ESP32 modules with BLE',
      language: 'Dart',
      languageColor: '#00B4AB',
    },
    {
      name: 'MqttBridge',
      url: 'https://github.com/ogabrielinacio/MqttBridge',
      description: 'MQTT Bridge of SmartIrrigator',
      language: 'Go',
      languageColor: '#00ADD8',
    },
    {
      name: 'BoilerControllerFirmware',
      url: 'https://github.com/ogabrielinacio/BoilerControllerFirmware',
      description: 'Firmware for boiler control system',
      language: 'C',
      languageColor: '#555555',
    },
    {
      name: 'ESP32-Rust-Samples',
      url: 'https://github.com/ogabrielinacio/ESP32-Rust-Samples',
      description:
        'Just a repository for projects on an ESP32 using the Rust language',
      language: 'Rust',
      languageColor: '#DEA584',
    },
  ];
}
