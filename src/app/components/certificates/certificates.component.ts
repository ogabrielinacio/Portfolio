import { Component, Renderer2 } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CertificatesArray } from "./certificates.data";

import {
  Certificate,
  CertificateCategory,
  SortType,
} from "./certificates.model";

@Component({
  selector: "app-certificates",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./certificates.component.html",
  styleUrl: "./certificates.component.scss",
})
export class CertificatesComponent {
  certificates = CertificatesArray.map((certificate,index) =>({
    ...certificate,
    id: index 
  }));
  categories = Object.values(CertificateCategory);
  selectedCategory: CertificateCategory | null = CertificateCategory.Backend;
  ESortType = SortType;
  sortType: SortType = SortType.Date;
  isReverseOrder = false;
  isSortDropdownOpen = false;
  isOrderDropdownOpen = false;

  getFilteredCertificates(): Certificate[] {
    const filteredCertificates = this.selectedCategory
      ? this.certificates.filter((certificate) =>
          certificate.category.includes(
            this.selectedCategory as CertificateCategory,
          ),
        )
      : [...this.certificates];

    filteredCertificates.sort((a, b) => {
      if (this.sortType === SortType.Alphabetical) {
        return a.title.localeCompare(b.title);
      } else {
        return b.issueDate.getTime() - a.issueDate.getTime();
      }
    });

    if (this.isReverseOrder) {
      filteredCertificates.reverse();
    }
    return filteredCertificates;
  }

  selectCategory(category: CertificateCategory | null): void {
    this.selectedCategory = category;
  }

  selectSortType(type: SortType): void {
    this.sortType = type;
  }

  toggleSortDropdown() {
    this.isSortDropdownOpen = !this.isSortDropdownOpen;
  }

  toggleOrderDropdown() {
    this.isOrderDropdownOpen = !this.isOrderDropdownOpen;
  }

  selectOrder(reverse: boolean): void {
    this.isReverseOrder = reverse;
  }

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.listen("document", "click", (event) => {
      const target = event.target as HTMLElement;
      const sortDropdown = document.querySelector(".sort-type-dropdown");
      const orderDropdown = document.querySelector(".order-type-dropdown");

      if (sortDropdown && !sortDropdown.contains(target)) {
        this.isSortDropdownOpen = false;
      }

      if (orderDropdown && !orderDropdown.contains(target)) {
        this.isOrderDropdownOpen = false;
      }
    });
  }
}
