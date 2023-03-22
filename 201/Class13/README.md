# Local Storage and How to Use it on Websites
This topic is important to me because it leads to more database releated topics and I want to learn more about how data is used locally and also in servers
## References
<https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/>.
<http://diveinto.html5doctor.com/storage.html>.
## Local Storage
**Summary** : Storing information locally on a user’s computer is a powerful strategy for a developer who is creating something for the Web. In this article, we’ll look at how easy it is to store information on a computer to read later and explain what you can use that for.
HTTP is stateless, which means when you use an app, and close it, it will reset.
When you close an app on your desktop and re-open it, its most recent state is restored.
This is where local storage comes in.
You can store the user's computer key locally and read it when the user returns.
The classic way to do this is cookies.
**Cookies** are text files hosted on the user's computer and connected to the domain that your website runs on.
You can store info, read them out and delete them.
They have limitations tho!
-They add to the load of every document accessed on the domain.
- They allow up to 4KB of data storage.
- Because cookies have been used wrongly before, companies and security concerned people turn them off or request to be asked every time if it should be set.
## Using Local Storage in HTML5
All you haver to do is modify the localstorage object in JS.
You can do that directly or use the setItem() and getItem() method.
    localStorage.setItem('favoriteflavor','vanilla');
and then when you read it out:
    var taste = localStorage.getItem('favoriteflavor');
    // -> "vanilla"
and then to remove the item:
    localStorage.removeItem('favoriteflavor');
    var taste = localStorage.getItem('favoriteflavor');
    // -> null
**sessionStorage** is used instead of localStorage if you want the data to be maintained only until the browser window closes.
A annoying shortcoming of local storage is that you can only store strings in the different keys.
If you have an object, it will not be stored the right way.
    var car = {};
    car.wheels = 4;
    car.doors = 2;
    car.sound = 'vroom';
    car.name = 'Lightning McQueen';
    console.log( car );
    localStorage.setItem( 'car', car );
    console.log( localStorage.getItem( 'car' ) );
This object stores the data as object object.
Using the **Json.stringify()** and the **JSON.parse()** methods help with this.
    var car = {};
    car.wheels = 4;
    car.doors = 2;
    car.sound = 'vroom';
    car.name = 'Lightning McQueen';
    console.log( car );
    localStorage.setItem( 'car', JSON.stringify(car) );
    console.log( JSON.parse( localStorage.getItem( 'car' ) ) );


### Local Storage Questions

1. To retain information about the user, like what section they're at, or if they did some actions.

2. Personal data, passwords, information that can be used in a poor way.

3. It stores strings. You can use json.stringify and json.parse methods to help with that.

## Things I want to know more about

I want to know more about applying local storage to my sites, what data to retain and how to prompt users with a GUI that asks if they want to give me cookies.