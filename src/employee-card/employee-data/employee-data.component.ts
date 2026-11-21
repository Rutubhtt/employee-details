import { Component } from '@angular/core';
import { EmployeeDataList } from './employee-data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-data',
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-data.component.html',
  styleUrl: './employee-data.component.css',
})
export class EmployeeDataComponent {
  employees = EmployeeDataList;

  searchEmp = [...this.employees];
  SearchName: string = '';
  SearchDept: string = '';
  flipp: number | null = null;

  SearchEmp() {
    const emp = this.SearchName.trim().toLowerCase();
    const dept = this.SearchDept;

    if (!emp && !dept) {
      this.searchEmp = [...this.employees];
      return;
    }
    this.searchEmp = this.employees.filter(
      (employee) => {
        if (emp && dept) {
          return (
            employee.EName.toLowerCase().includes(emp) &&
            employee.EDep.toLowerCase().includes(dept)
          );
        } else if (emp) {
          return employee.EName.toLowerCase().includes(emp);
        } else {
          return employee.EDep === dept;
        }
      },
      // employee.EName.toLowerCase().includes(emp)
    );
  }

  OnClrear() {
    this.SearchName = '';
    this.SearchDept = '';
    this.searchEmp = [...this.employees];
  }

  toggleData(Eid: number) {
    this.flipp = this.flipp === Eid ? null : Eid;
  }
}
