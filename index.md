---
layout: default
---

[//]: <> (Text can be **bold**, _italic_, or ~~strikethrough~~.)

## How to use
When the script is installed/enabled, then just click all answers, a popup will show when the correct answer has been selected.

## Installation

### Chrome:
1. Install the [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo){:target="_blank"} extension.
2. Now add the [userscript](https://github.com/kres0345/MatematikFessorBug/raw/master/src/Userscript/MatematikFessorCheat.user.js){:target="_blank"}, when opened, press 'install'.
3. That's it, now remember I take no responsibility in the fact that you wont get better at math.

### Firefox:
1. Install the [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/){:target="_blank"} addon.
2. Now add the [userscript](https://github.com/kres0345/MatematikFessorBug/raw/master/src/Userscript/MatematikFessorCheat.user.js){:target="_blank"}, when opened, press 'install'.
3. That's it, now remember I take no responsibility in the fact that you wont get better at math.

### Microsoft Edge:
1. Install the [Tampermonkey](https://www.microsoft.com/store/apps/9NBLGGH5162S){:target="_blank"} extension for Microsoft Edge.
2. Add the [userscript](https://github.com/kres0345/MatematikFessorBug/raw/master/src/Userscript/MatematikFessorCheat.user.js){:target="_blank"}, then press 'install'.

### Opera:
1. Install the [Tampermonkey](https://addons.opera.com/en/extensions/details/tampermonkey-beta/){:target="_blank"} or [Violent Monkey](https://addons.opera.com/en/extensions/details/violent-monkey/){:target="_blank"} addon.
2. Add the [userscript](https://github.com/kres0345/MatematikFessorBug/raw/master/src/Userscript/MatematikFessorCheat.user.js){:target="_blank"}, then press 'install'.
[//]: <> (This is also a comment.__)

### Manuel:
1. Open the task you wish to cheat on, then press 'f12'.
2. Then paste the string below into the 'console' tab.
3. Remember to repeat steps when starting new task.

```js
XMLHttpRequest.prototype.realSend=XMLHttpRequest.prototype.send,XMLHttpRequest.prototype.send=function(t){this.addEventListener("load",function(){JSON.parse(this.responseText).data.saved.UserAnswer.correct&&alert("Rigtigt svar")},!1),this.realSend(t)};
```

## Source code
```js
XMLHttpRequest.prototype.realSend = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send = function(value) {
    this.addEventListener("load", function(){
		if(JSON.parse(this.responseText).data.saved.UserAnswer.correct){
			alert("Rigtigt svar");
		}
    }, false);
    this.realSend(value);
};
```

#### Header 4

*   This is an unordered list following a header.
*   This is an unordered list following a header.
*   This is an unordered list following a header.

##### Header 5

1.  This is an ordered list following a header.
2.  This is an ordered list following a header.
3.  This is an ordered list following a header.

###### Header 6

| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

### There's a horizontal rule below this.

* * *

### Here is an unordered list:

*   Item foo
*   Item bar
*   Item baz
*   Item zip

### And an ordered list:

1.  Item one
1.  Item two
1.  Item three
1.  Item four

### And a nested list:

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

### Small image

![Octocat](https://assets-cdn.github.com/images/icons/emoji/octocat.png)

### Large image

![Branching](https://guides.github.com/activities/hello-world/branching.png)


### Definition lists can be used with HTML syntax.

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```
The final element.
```
