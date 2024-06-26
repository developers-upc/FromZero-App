import {Component, OnInit, ViewChild} from '@angular/core';
import {ISupportMessage} from "../../model/isupport-message";
import {SupportMessageService} from "../../services/support-message-service/support-message.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-support-message-list',
  templateUrl: './support-message-list.component.html',
  styleUrl: './support-message-list.component.css'
})
export class SupportMessageListComponent implements OnInit{
    supportMessages!: ISupportMessage[];
    displayedColumns = [
      { columnDef: 'Id', propertyPath: 'id' },
      { columnDef: 'User Email', propertyPath: 'sender.email' },
      { columnDef: 'Title', propertyPath: 'title' },
      { columnDef: 'Description', propertyPath: 'description' },
      { columnDef: 'Type', propertyPath: 'type' },
      { columnDef: 'Created at', propertyPath: 'creationDate' }
    ];
    columnDefs: string[] = this.displayedColumns.map(column => column.columnDef);

  dataSource !: MatTableDataSource<ISupportMessage>;

    constructor(private _supportMessageService: SupportMessageService) {

    }
    @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
    }
  }
    ngOnInit(): void {
        this._supportMessageService.getAll().subscribe((supportMessages: ISupportMessage[]) => {
          this.supportMessages = supportMessages;
          this.dataSource = new MatTableDataSource(this.supportMessages);
          this.dataSource.paginator = this.paginator;
          console.log(this.supportMessages);
      });
    }

}
