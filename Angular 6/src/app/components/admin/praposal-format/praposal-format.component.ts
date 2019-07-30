import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService, QuickToolbarService } from '@syncfusion/ej2-angular-richtexteditor';

const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-praposal-format',
  templateUrl: './praposal-format.component.html',
  styleUrls: ['./praposal-format.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, TableService,  QuickToolbarService]
})
export class PraposalFormatComponent implements OnInit {
  public value: string = `
    <p>The RichTextEditor triggers events based on its actions. </p>
                        <p> The events can be used as an extension point to perform custom operations.</p>
                        <ul>
                            <li>created - Triggers when the component is rendered.</li>
                            <li>change - Triggers only when RTE is blurred and changes are done to the content.</li>
                            <li>focus - Triggers when RTE is focused in.</li>
                            <li>blur - Triggers when RTE is focused out.</li>
                            <li>actionBegin - Triggers before command execution using toolbar items or executeCommand method.</li>
                            <li>actionComplete - Triggers after command execution using toolbar items or executeCommand method.</li>
                            <li>destroyed – Triggers when the component is destroyed.</li>
                        </ul>`;

  public tools: object = {
    items: [
        'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
        'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
        'LowerCase', 'UpperCase', '|', 'Undo', 'Redo', '|',
        'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
        'Indent', 'Outdent', '|', 'CreateLink','CreateTable',
        'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen'],
};

public quickTools: object = {
  image: [
      'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', '-', 'Display', 'AltText', 'Dimension']
};





  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  constructor() { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     };
  }

}
