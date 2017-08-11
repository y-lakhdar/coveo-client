import {ReplaceAll} from '../utils/string-utils'

export function DiffResultsPageHtmlTemplate(organization1:string, organization2:string, diffResultsItems:Array<string>):string {
    var baseHtml:string = `
      <!DOCTYPE html>
      <html>
          <head>
              <style>
                .jsondiffpatch-delta,.jsondiffpatch-delta pre{font-family:'Bitstream Vera Sans Mono','DejaVu Sans Mono',Monaco,Courier,monospace;font-size:12px;display:inline-block;margin:0}.jsondiffpatch-delta{padding:0 0 0 12px}.jsondiffpatch-delta pre{padding:0}.jsondiffpatch-delta ul,ul.jsondiffpatch-delta{list-style-type:none;padding:0 0 0 20px;margin:0}.jsondiffpatch-added .jsondiffpatch-property-name,.jsondiffpatch-added .jsondiffpatch-value pre,.jsondiffpatch-modified .jsondiffpatch-right-value pre,.jsondiffpatch-textdiff-added{background:#bfb}.jsondiffpatch-deleted .jsondiffpatch-property-name,.jsondiffpatch-deleted pre,.jsondiffpatch-modified .jsondiffpatch-left-value pre,.jsondiffpatch-textdiff-deleted{background:#fbb;text-decoration:line-through}.jsondiffpatch-movedestination,.jsondiffpatch-unchanged{color:gray}.jsondiffpatch-movedestination>.jsondiffpatch-value,.jsondiffpatch-unchanged{transition:all .5s;-webkit-transition:all .5s;overflow-y:hidden}.jsondiffpatch-unchanged-showing .jsondiffpatch-movedestination>.jsondiffpatch-value,.jsondiffpatch-unchanged-showing .jsondiffpatch-unchanged{max-height:100px}.jsondiffpatch-unchanged-hidden .jsondiffpatch-movedestination>.jsondiffpatch-value,.jsondiffpatch-unchanged-hidden .jsondiffpatch-unchanged{max-height:0}.jsondiffpatch-unchanged-hidden .jsondiffpatch-movedestination>.jsondiffpatch-value,.jsondiffpatch-unchanged-hiding .jsondiffpatch-movedestination>.jsondiffpatch-value{display:block}.jsondiffpatch-unchanged-visible .jsondiffpatch-movedestination>.jsondiffpatch-value,.jsondiffpatch-unchanged-visible .jsondiffpatch-unchanged{max-height:100px}.jsondiffpatch-unchanged-hiding .jsondiffpatch-movedestination>.jsondiffpatch-value,.jsondiffpatch-unchanged-hiding .jsondiffpatch-unchanged{max-height:0}.jsondiffpatch-unchanged-hiding .jsondiffpatch-arrow,.jsondiffpatch-unchanged-showing .jsondiffpatch-arrow{display:none}.jsondiffpatch-modified .jsondiffpatch-value,.jsondiffpatch-value{display:inline-block}.jsondiffpatch-property-name{display:inline-block;padding-right:5px;vertical-align:top}.jsondiffpatch-property-name:after{content:': '}.jsondiffpatch-child-node-type-array>.jsondiffpatch-property-name:after{content:': ['}.jsondiffpatch-child-node-type-array:after{content:'],'}div.jsondiffpatch-child-node-type-array:before{content:'['}div.jsondiffpatch-child-node-type-array:after{content:']'}.jsondiffpatch-child-node-type-object>.jsondiffpatch-property-name:after{content:': {'}.jsondiffpatch-child-node-type-object:after{content:'},'}div.jsondiffpatch-child-node-type-object:before{content:'{'}div.jsondiffpatch-child-node-type-object:after{content:'}'}.jsondiffpatch-value pre:after{content:','}.jsondiffpatch-modified>.jsondiffpatch-left-value pre:after,li:last-child>.jsondiffpatch-value pre:after{content:''}.jsondiffpatch-modified .jsondiffpatch-right-value{margin-left:5px}.jsondiffpatch-moved .jsondiffpatch-value{display:none}.jsondiffpatch-moved .jsondiffpatch-moved-destination{display:inline-block;background:#ffb;color:#888}.jsondiffpatch-moved .jsondiffpatch-moved-destination:before{content:' => '}ul.jsondiffpatch-textdiff{padding:0}.jsondiffpatch-textdiff-location{color:#bbb;display:inline-block;min-width:60px}.jsondiffpatch-textdiff-line{display:inline-block}.jsondiffpatch-textdiff-line-number:after{content:','}.jsondiffpatch-error{background:red;color:#fff;font-weight:700}
              </style>
          </head>
          <body>
              <h1>Coveo Organizations Diff</h1>
              Diff results between {organization1} and {organization2}. Showing changes for {organization2}.
              <hr />
              {diffResultsItems}
          </body>
      </html>
    `;

    baseHtml = ReplaceAll(baseHtml, '{diffResultsItems}', diffResultsItems.join('<hr />'));
    baseHtml = ReplaceAll(baseHtml, '{organization1}', organization1);
    baseHtml = ReplaceAll(baseHtml, '{organization2}', organization2);

    return baseHtml;
}

export function DiffResultsItemTemplate(sectionTitle:string, diffResults:string):string {
    var baseHtml:string = `
        <div>
            <h2>{sectionTitle}</h2>
            <div id="visual">{diffresult}</div>
        </div>
    `;

    return baseHtml
        .replace('{sectionTitle}', sectionTitle)
        .replace('{diffresult}', diffResults);
}
