window.onload = function() {
    // 通用地图初始化函数
    const initMap = (containerId, pointConfig) => {
        const map = new BMap.Map(containerId);
        const point = new BMap.Point(pointConfig.lng, pointConfig.lat);
        map.centerAndZoom(point, 19);
        
        // 基础交互功能
        map.enableScrollWheelZoom(true);
        map.enableDragging();
        
        // 添加标记
        const marker = new BMap.Marker(point);
        map.addOverlay(marker);
        
        // 信息窗口
        const infoWindow = new BMap.InfoWindow(`
            <div style="padding:10px;min-width:200px">
                <h4>${pointConfig.name}</h4>
                <p>经度：${pointConfig.lng.toFixed(4)}</p>
                <p>纬度：${pointConfig.lat.toFixed(4)}</p>
            </div>
        `);
        
        marker.addEventListener("click", () => {
            marker.openInfoWindow(infoWindow);
        });
    };

    // 初始化三个地图
    initMap('container1', { lng: 120.302, lat: 29.160, name: '横店影视城' });
    initMap('container2', { lng: 116.397, lat: 39.916, name: '故宫博物院' });
    initMap('container3', { lng: 116.347, lat: 39.869, name: '大观园' });
};