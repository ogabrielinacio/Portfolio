import { environment } from "../../../environments/environment";
import { Certificate, CertificateCategory } from "./certificates.model";

const baseUrl = environment.baseUrl;

export const CertificatesArray: Certificate[] = [
  {
    title: "Domain Driven Design",
    issuer: "Full Cycle",
    url: `${baseUrl}/FullCycle-Domain-Driven-Design.pdf`,
    issuerUrl:
      "https://fullcycle.com.br/certificado/ccc1e86d-d90f-4337-aa00-980f0dfa829e",
    issueDate: new Date(2024, 10, 19),
    category: [CertificateCategory.Architecture, CertificateCategory.Backend],
  },
  {
    title: "SOLID",
    issuer: "Full Cycle",
    url: `${baseUrl}/FullCycle-SOLID.pdf`,
    issuerUrl:
      "https://fullcycle.com.br/certificado/a4fcc963-f7f1-460d-8790-7659b0b59ebf",
    issueDate: new Date(2024, 10, 19),
    category: [
      CertificateCategory.Backend,
      CertificateCategory.Frontend,
      CertificateCategory.Mobile,
      CertificateCategory.Architecture,
      CertificateCategory.EmbeddedSystem,
    ],
  },
  {
    title: "Advanced Patterns and Techniques with Git and GitHub",
    issuer: "Full Cycle",
    url: `${baseUrl}/FullCycle-Padroes-e-tecnicas-avancadas-com-git-e-github.pdf`,
    issuerUrl:
      "https://fullcycle.com.br/certificado/c67d8c89-639e-4ffb-8564-d861ab644c77",
    issueDate: new Date(2024, 10, 18),
    category: [
      CertificateCategory.DevOps,
      CertificateCategory.Backend,
      CertificateCategory.Frontend,
      CertificateCategory.Mobile,
      CertificateCategory.EmbeddedSystem,
    ],
  },
  {
    title: "Kubernetes",
    issuer: "Full Cycle",
    url: `${baseUrl}/FullCycle-Kubernetes.pdf`,
    issuerUrl:
      "https://fullcycle.com.br/certificado/4cd9ce30-6cf4-4c51-bf99-678d2aa9e8c0/",
    issueDate: new Date(2024, 10, 16),
    category: [CertificateCategory.DevOps],
  },
  {
    title: "Terraform",
    issuer: "Full Cycle",
    url: `${baseUrl}/FullCycle-Terraform.pdf`,
    issuerUrl:
      "https://fullcycle.com.br/certificado/078421b6-3f6b-4fc2-ac98-60ff58edf83a",
    issueDate: new Date(2024, 10, 13),
    category: [CertificateCategory.DevOps],
  },
  {
    title: "Docker",
    issuer: "Full Cycle",
    url: `${baseUrl}/FullCycle-Docker.pdf`,
    issuerUrl:
      "https://fullcycle.com.br/certificado/03c80752-3be6-4b30-a099-3498bb17aec8",
    issueDate: new Date(2024, 10, 3),
    category: [
      CertificateCategory.DevOps,
      CertificateCategory.Backend,
      CertificateCategory.Frontend,
      CertificateCategory.EmbeddedSystem,
    ],
  },
  {
    title: ".NET Architecture Track",
    issuer: "Globalcode Tecnologia e Eventos",
    url: `${baseUrl}/TDC2024SPArquitetureDotnet.pdf`,
    issueDate: new Date(2024, 9, 19),
    category: [
      CertificateCategory.Architecture,
      CertificateCategory.Backend,
      CertificateCategory.Events,
    ],
  },
  {
    title: "Microservices Track",
    issuer: "Globalcode Tecnologia e Eventos",
    url: `${baseUrl}/TDC2024SPMicroservices.pdf`,
    issueDate: new Date(2024, 9, 18),
    category: [CertificateCategory.DevOps, CertificateCategory.Events],
  },
  {
    title: ".NET 7 Web API and Entity Framework Jumpstart",
    issuer: "Udemy",
    url: `${baseUrl}/DOTNET7WebAPI&EntityFrameworkJumpstart.pdf`,
    issuerUrl:
      "https://www.udemy.com/certificate/UC-3c0c8470-8d89-4427-a3e1-3452e78ff74f/",
    issueDate: new Date(2024, 1, 21),
    category: [CertificateCategory.Backend],
  },
  {
    title: "React from Zero to Mastery (with hooks, router, API, Projects",
    issuer: "Udemy",
    url: `${baseUrl}/React.pdf`,
    issuerUrl:
      "https://www.udemy.com/certificate/UC-f8cc2d26-19a8-4d19-a012-9b996f725548/",
    issueDate: new Date(2023, 10, 2),
    category: [CertificateCategory.Frontend],
  },
  {
    title: "Creating Embedded Linux Systems with Yocto Project",
    issuer: "Embarcados",
    url: `${baseUrl}/Yocto.pdf`,
    issuerUrl: "https://cursos.embarcados.com.br/verificar/af8TMQSPBu/",
    issueDate: new Date(2023, 8, 1),
    category: [CertificateCategory.EmbeddedSystem],
  },
  {
    title: "Creating APIs with ASP.NET Core 2.0 and Dapper",
    issuer: "balta.io",
    url: `${baseUrl}/Dotnet-Backend-Career-Balta/CriandoApiComAsptNetCoreEDapper.pdf`,
    issuerUrl:
      "https://balta.io/certificados/65913fba-868a-4b23-b9b3-5267ec8e62c7",
    issueDate: new Date(2023, 8, 30),
    category: [CertificateCategory.Backend],
  },
  {
    title: "Todo App: API with ASP.NET Core, CQRS and EF Core",
    issuer: "balta.io",
    url: `${baseUrl}/Dotnet-Backend-Career-Balta/TodoAppComAspNET.pdf`,
    issuerUrl:
      "https://balta.io/certificados/e8c91b42-2d2e-47bd-bffc-45f5d8e7167b",
    issueDate: new Date(2023, 8, 17),
    category: [CertificateCategory.Backend],
  },
  {
    title: "Azure, Git, GitHub, and DevOps Fundamentals",
    issuer: "balta.io",
    url: `${baseUrl}/Dotnet-Backend-Career-Balta/FundamentosDoAzureGitGithub.pdf`,
    issuerUrl:
      "https://balta.io/certificados/5400d405-3c1b-4e8d-a39d-ce574845fcf0",
    issueDate: new Date(2023, 8, 12),
    category: [CertificateCategory.DevOps],
  },
  {
    title: "Mastering Dependency Injection",
    issuer: "balta.io",
    url: `${baseUrl}/Dotnet-Backend-Career-Balta/DominandoInjecaoDeDepencia.pdf`,
    issuerUrl:
      "https://balta.io/certificados/828807eb-ae2f-4a3a-b89c-fd5b08d0ef85",
    issueDate: new Date(2023, 8, 10),
    category: [CertificateCategory.Backend],
  },
  {
    title:
      "Applying Object-Oriented Programming in Real Projects with C# 11 and .NET 7",
    issuer: "balta.io",
    url: `${baseUrl}/Dotnet-Backend-Career-Balta/aplicandoPOOProjetosReaisDotnet7.pdf`,
    issuerUrl:
      "https://balta.io/certificados/3f565193-8417-4073-a5d0-802eeb000620",
    issueDate: new Date(2023, 8, 10),
    category: [CertificateCategory.Backend],
  },
  {
    title: "Refactoring for Unit Testing",
    issuer: "balta.io",
    url: `${baseUrl}/Dotnet-Backend-Career-Balta/RefatorandoTesteUnidades.pdf`,
    issuerUrl:
      "https://balta.io/certificados/08160b87-6486-4bf2-a347-274442f648bb",
    issueDate: new Date(2023, 8, 7),
    category: [CertificateCategory.Backend],
  },
  {
    title: "ASP.NET 6 Fundamentals",
    issuer: "balta.io",
    url: `${baseUrl}/Dotnet-Backend-Career-Balta/AspNet6.0.pdf`,
    issuerUrl:
      "https://balta.io/certificados/f7b66a28-80b4-4837-a9f4-74d55a38d3f2",
    issueDate: new Date(2023, 8, 6),
    category: [CertificateCategory.Backend],
  },
  {
    title: "Modeling Rich Domains",
    issuer: "balta.io",
    url: `${baseUrl}/Dotnet-Backend-Career-Balta/ModelandoDominiosRicos.pdf`,
    issuerUrl:
      "https://balta.io/certificados/c9126834-e7cd-4a3d-9c4a-6d3fddffa6a5",
    issueDate: new Date(2023, 8, 4),
    category: [CertificateCategory.Backend],
  },
  {
    title: "Attendance Statement at FIEE 2023",
    issuer: "FIEE",
    url: `${baseUrl}/declaracaoFIEE.pdf`,
    issueDate: new Date(2023, 8, 1),
    category: [CertificateCategory.Events, CertificateCategory.EmbeddedSystem],
  },
  {
    title: "Entity Framework Fundamentals",
    issuer: "balta.io",
    url: `${baseUrl}/Dotnet-Backend-Career-Balta/FundamentosDoEntityFramework.pdf`,
    issuerUrl:
      "https://balta.io/certificados/f59f836c-b8d3-4897-b0ff-294c168dfa5c",
    issueDate: new Date(2023, 7, 4),
    category: [CertificateCategory.Backend],
  },
  {
    title: "Data Access with .NET, C#, Dapper and SQL Server",
    issuer: "balta.io",
    url: `${baseUrl}/Dotnet-Backend-Career-Balta/DotnetDapperSqlServer.pdf`,
    issuerUrl:
      "https://balta.io/certificados/3868850b-1d71-46e0-a822-a966a20d443a",
    issueDate: new Date(2023, 6, 30),
    category: [CertificateCategory.Backend],
  },
  {
    title: "SQL Server Fundamentals",
    issuer: "balta.io",
    url: `${baseUrl}/Dotnet-Backend-Career-Balta/FundamentosDoSQLServer.pdf`,
    issuerUrl:
      "https://balta.io/certificados/1171296e-5be2-40cf-b004-3e69a345783d",
    issueDate: new Date(2023, 6, 28),
    category: [CertificateCategory.Backend],
  },
  {
    title: "Object-Oriented Programming Fundamentals",
    issuer: "balta.io",
    url: `${baseUrl}/Dotnet-Backend-Career-Balta/Balta_POO.pdf`,
    issuerUrl:
      "https://balta.io/certificados/6a74c48a-2048-463d-95c8-fe62006e1fa5",
    issueDate: new Date(2023, 6, 16),
    category: [CertificateCategory.Backend],
  },
  {
    title: "C# Fundamentals",
    issuer: "balta.io",
    url: `${baseUrl}/Dotnet-Backend-Career-Balta/FundamentosCsharp.pdf`,
    issuerUrl:
      "https://balta.io/certificados/bb52d866-dae7-4bbc-abe4-706542607f49",
    issueDate: new Date(2023, 6, 12),
    category: [CertificateCategory.Backend],
  },
  {
    title: "Flutter & Dart – The Complete Guide [2023 Edition]",
    issuer: "Udemy",
    url: `${baseUrl}/Flutter_Guide.pdf`,
    issuerUrl:
      "https://www.udemy.com/certificate/UC-13d0b988-bdbc-44d0-a275-d5062662ad86/",
    issueDate: new Date(2023, 2, 18),
    category: [CertificateCategory.Mobile],
  },
  {
    title: "Flutter Apps: BMI with Material, Cupertino, and BLoC",
    issuer: "balta,io",
    url: `${baseUrl}/Flutter_Material_Cupertino.pdf`,
    issueDate: new Date(2023, 4, 2),
    issuerUrl:
      "https://balta.io/certificados/77d1130e-025f-4d39-bc29-724d484b003a",
    category: [CertificateCategory.Mobile],
  },
  {
    title: "Consuming Rest APIs in Flutter",
    issuer: "balta.io",
    url: `${baseUrl}/Consumindo_API_Flutter.pdf`,
    issueDate: new Date(2023, 4, 2),
    issuerUrl:
      "https://balta.io/certificados/5c59899d-e846-4a23-854f-9cd8e68b915d",
    category: [CertificateCategory.Mobile],
  },
  {
    title: "Data Manipulation with Python",
    issuer: "Pontifical Catholic University, Poços de Caldas",
    url: `${baseUrl}/PythonPUC.pdf`,
    issueDate: new Date(2022, 10, 28),
    category: [
      CertificateCategory.Backend,
      CertificateCategory.DevOps,
      CertificateCategory.EmbeddedSystem,
    ],
  },
  {
    title: "Runrun.it",
    issuer: "Runrun.it",
    url: `${baseUrl}/Runrunit.pdf`,
    issueDate: new Date(2022, 8, 8),
    category: [CertificateCategory.Tools],
  },
  {
    title: "Networks",
    issuer: "Paulo Kretcheu",
    url: `${baseUrl}/Redes.pdf`,
    issueDate: new Date(2022, 5, 14),
    category: [CertificateCategory.DevOps],
  },
  {
    title: "Understanding and Documenting REST/RESTful APIs",
    issuer: "Udemy",
    url: `${baseUrl}/Entendendo_e_Documentando_RESTfulAPI.pdf`,
    issuerUrl:
      "https://www.udemy.com/certificate/UC-bff7c21e-6023-44bb-a4ca-b7354a9c5760/",
    issueDate: new Date(2022, 5, 14),
    category: [CertificateCategory.Backend],
  },
  {
    title:
      "VIII Scientific Initiation Forum & V Extensionist Work Exhibition 1",
    issuer: "Pontifical Catholic University, Poços de Caldas",
    url: `${baseUrl}/ForumIniciacaoCientifica.pdf`,
    issueDate: new Date(2022, 5, 14),
    category: [CertificateCategory.Events],
  },
  {
    title: "Docker for Developers (with Docker Swarm and Kubernetes)",
    issuer: "Udemy",
    url: `${baseUrl}/Docker.pdf`,
    issuerUrl:
      "https://www.udemy.com/certificate/UC-946d3db1-58a8-4a53-90b6-bd0b3fd4c85c/",
    issueDate: new Date(2022, 5, 7),
    category: [
      CertificateCategory.DevOps,
      CertificateCategory.Backend,
      CertificateCategory.Frontend,
      CertificateCategory.EmbeddedSystem,
    ],
  },
  {
    title: "Back-End Web Applications with Laravel",
    issuer: "Pontifical Catholic University, Poços de Caldas",
    url: `${baseUrl}/LaravelPUC.pdf`,
    issueDate: new Date(2022, 5, 6),
    category: [CertificateCategory.Backend],
  },
  {
    title: "Shell Script Programming from Basic to Advanced",
    issuer: "Slackjeff",
    url: `${baseUrl}/ShellScript.pdf`,
    issueDate: new Date(2022, 4, 10),
    category: [CertificateCategory.DevOps, CertificateCategory.EmbeddedSystem],
  },
  {
    title: "Python 3 from Basic to Advanced (with real projects)",
    issuer: "Udemy",
    url: `${baseUrl}/Python.pdf`,
    issuerUrl:
      "https://www.udemy.com/certificate/UC-e456f2af-8b86-4dcd-b1c6-716b09088cb1/",
    issueDate: new Date(2022, 4, 27),
    category: [
      CertificateCategory.Backend,
      CertificateCategory.DevOps,
      CertificateCategory.EmbeddedSystem,
    ],
  },
  {
    title: "Interactive Front-End Web Applications with React",
    issuer: "Pontifical Catholic University, Poços de Caldas",
    url: `${baseUrl}/ReactPUC.pdf`,
    issueDate: new Date(2021, 10, 29),
    category: [CertificateCategory.Frontend],
  },
  {
    title: "Persistence with Flutter: Create an App with Local Storage",
    issuer: "Alura",
    url: `${baseUrl}/FlutterPersistencia.pdf`,
    issueDate: new Date(2021, 6, 15),
    category: [CertificateCategory.Mobile],
  },
  {
    title: "Flutter: Create Your First App",
    issuer: "Alura",
    url: `${baseUrl}/FlutterFundamentos.pdf`,
    issueDate: new Date(2021, 6, 2),
    category: [CertificateCategory.Mobile],
  },
  {
    title: "NDG Linux Unhatched",
    issuer: "Cisco Networking Academy",
    url: `${baseUrl}/NDGLINUX.pdf`,
    issueDate: new Date(2021, 5, 2),
    category: [CertificateCategory.DevOps, CertificateCategory.EmbeddedSystem],
  },
  {
    title: "CNA Master in English",
    issuer: "CNA Idiomas",
    url: `${baseUrl}/CNACertificate.pdf`,
    issueDate: new Date(2021, 4, 29),
    category: [CertificateCategory.Languages],
  },
  {
    title: "HTML5 and CSS3 Part 1: The First Web Page",
    issuer: "Alura",
    url: `${baseUrl}/HTMLCSSJSparte1.pdf`,
    issueDate: new Date(2021, 1, 15),
    category: [CertificateCategory.Frontend],
  },
  {
    title: "HTML5 and CSS3 Part 2: Positioning, Lists, and Navigation",
    issuer: "Alura",
    url: `${baseUrl}/HTMLCSSJSparte2.pdf`,
    issueDate: new Date(2021, 1, 15),
    category: [CertificateCategory.Frontend],
  },
  {
    title: "TOEFL ITP B1",
    issuer: "Mastertest Educational",
    url: `${baseUrl}/TOEFL-ITP.pdf`,
    issueDate: new Date(2020, 11, 24),
    category: [CertificateCategory.Languages],
  },
];
