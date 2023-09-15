    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.7611476738642,37.61159783735525],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 14
        });

       /* var myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point", // тип геометрии - точка
                coordinates: [55.758468, 37.601088] // координаты точки
            }
        });*/

        var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
            iconLayout: 'default#image',
            iconImageHref: '../img/contacts/contacts-marker.svg',
            iconImageSize: [20, 20],
            iconImageOffset: [-3, -42]
        });

        myMap.geoObjects.add(myPlacemark); 
    }