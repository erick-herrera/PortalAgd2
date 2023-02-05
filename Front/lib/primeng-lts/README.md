# PrimeNG LTS (Long Term Support)

## License
>  **PrimeNG LTS** is a commercial software. You need to purchase a license and agree to the terms of the [LTS License](https://www.primefaces.org/lts/licenses). Please note that using the software without a proper license constitutes copyright infringement and can result in legal actions.

* A license must to be obtained before installing and importing this package.
* LTS license is per developer and period is 1 year.
* License needs to be renewed after the expiration to be able to continue using the LTS versions of PrimeNG.
* Licenses can be obtained online at [PrimeStore](https://www.primefaces.org/store).
* Please contact [PrimeTek](mailto:primeng@primetek.com.tr) regarding any inquiry such as alternative payment methods and license terms. 

## Installation

### tsconfig.path
In order to use an LTS release, primeng import path must reference the primeng-lts package.

```javascript
{
    "compilerOptions": {
        //...other options
        "paths": {
            "primeng/*": ["node_modules/primeng-lts/*"]
        }
    }
}
```

#### PrimeNG Styles
Resources including the primeng.min.css and the selected theme need to be loaded from the *primeng-lts* package.
```
node_modules/primeng-lts/resources/primeng.min.css
node_modules/primeng-lts/resources/themes/nova-light/theme.css
```
