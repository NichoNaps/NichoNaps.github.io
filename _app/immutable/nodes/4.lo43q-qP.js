import{a as c,t as u}from"../chunks/CmpIuucV.js";import"../chunks/cGnTXyqc.js";import{s as r,f as m,c as t,n as a,r as s}from"../chunks/DXYd9PTg.js";import{s as h}from"../chunks/CiWsPDbd.js";const g=""+new URL("../assets/1.6XoUjygZ.png",import.meta.url).href,y=""+new URL("../assets/2.BLtnUN41.png",import.meta.url).href;var f=u(`<br> <h1>CatTracks Calendar Syncing</h1> <h3>The Problem</h3> <p>The MSU CatTracks website is run by the <a href="https://www.montana.edu/careers/">AYCSS</a> and amongst many things houses an appointment system. This system is used by
    everyone from student class tutors to career coaches for hosting appointments
    that students can then sign up for on the website. However, since these appointments
    are only within CatTracks it means that in pratice employees creating appointments
    have to juggle both Outlook calendar which contains the rest of their busy schedules
    and the CatTracks website calendar which only has appointments.</p> <p>To remedy this I researched and devised a way to create a unique url that
    would return an iCalendar file exports of a person's appointments. Outlook
    supports adding urls that return iCalendar files as way to automatically
    sync calendar data into Outlook.</p> <p>What was left then, was creating a UI/UX for employees to create new syncing
    urls that they can add to their Outlook.</p> <p>Tools Used: <span class="badge text-bg-secondary">VSCode</span> <span class="badge text-bg-secondary">Bootstrap</span></p> <h2>Discovery Processes</h2> <h3>1. Initial Prototype and Research</h3> <p>I first layed out what I thought could work as a prototype and started
    building out the basic functionality.</p> <p>During this time I would occasionally have an idea of how something could be
    expanded on to be useful. Before implementing it though, I would ask one of
    the affected employees if they thought they would actually use it. One such
    example was the idea to allow creating multiple syncing urls with attached
    filters. This would be useful to employees with many types of appointments
    that might want to have them color coded differently within Outlook which
    they agreed would be nice to have so I added it.</p> <p>For adding the appointment filters I actually used an identical UI for
    appointment filtering to another place on the website so users have an
    easier time using it.</p> <h3>2. User Testing</h3> <p>After getting a minimum viable product working I tried it on an employee to
    see how well it fared. This was extremely useful because it revealed several
    issues with the feature.</p> <ul><li>Many AYCSS employees use Macs and the accompanying Mac Outlook App. It
        turns out the Mac Outlook App is missing the button to add the syncing
        url so I added into the instructions a warning that the Mac App won't
        work for adding the url and recommend the use of the web version of
        Outlook which does have the button.</li> <li>The url generation would always break the first time requiring a page
        reload to get it working again. This was an easy fix to the backend
        code.</li></ul> <p>With the above fixes applied and the last pieces of functionality added to
    the page this new feature was successfully deployed. Provided below are some
    screenshots of the final page.</p> <div class="row mt-5"><div class="col-xl-6"><img class="my-img"> <p>Landing Page</p></div> <div class="col-xl-6"><img class="my-img"> <p>Instructions to add the sync URL.</p></div></div> <br style="margin-top: 200px;">`,1);function I(l){var o=f(),i=r(m(o),32),e=t(i),d=t(e);h(d,"src",g),a(2),s(e);var n=r(e,2),p=t(n);h(p,"src",y),a(2),s(n),s(i),a(2),c(l,o)}export{I as component};
