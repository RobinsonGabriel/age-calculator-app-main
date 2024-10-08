# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Jquery
- Desktop-first

### What I learned

I was just excited I found a good reason to make use of destructuring that improved the solution I would have needed to use otherwise
(see below). It was nice to get a bit of time dusting off the logical programming that I haven't had a change to play with nearly as much
due to doing so much with design work lately.

I learned to appreciate some of the ways logical operators work in JS (short-circuting is something I haven't thought about until today)
and it will be something to note that I need to look at the way more complicated if statements are layed out. Also to see if it's really
necessary to set up an if statement to the point I need to consider these kinds of things.

```js
function year_validate(year) {
	year = Number($("#year").val());
	if ($("#year").val().match(regex) || year < 1900) {
		$("#valid__year").css("visibility", "visible");
		return false;
	} else {
		$("#valid__year").css("visibility", "hidden");
		return { year_flag: true, year: year };
	}
}
```

### Continued development

I do want to make more time to work on refactoring code, as something still feels sub ideal about the output of the project. It's not hard
to step through and I did make an attempt to note any decisions that would be worth noting, however I'd still prefer to have more tools
for refactoring and cleaning up functions as the code I ended up with feels... cumbersome for what it is doing. I am proud of my detail
in catching edge cases (something I have been working hard to get better at) though that feels like I created a much larger codebase
than I would have prefered. It may benefit me to look over more people's code to see how they work solutions after I do mine to see if my
ideas are messy or if this is just me being overly critical.
