<template>
  <div class="main-context">
    <div id="TCP2" class="main">
      <img class="img-context" src="./../../static/pic/finddata1.png" />
      <div class="page-context">
        <div class="title-context">关于TCO2</div>
        <div class="">
          <div>
            <div>
              <div class="little-title">1.产品基本介绍</div>
              <div class="one-para-context">
                  使用LightGBM机器学习模型，结合气象数据、海拔数据和土地利用类型等预测变量，对来自Orbiting
                  Carbon Observatory
                  2（OCO-2）卫星的CO2数据集的缺测值进行准确的重构，用网页展示全国实时CO2浓度分布变化特征，具有高时空分辨率、全覆盖性、高准确度。
                  CO2实时监测、预测体系能够充分显示出各地详细的CO2细节信息，有助于发现重要的碳源、碳汇，为各地节能减排政策的制定、实施起到积极参考作用，致力于推动“碳中和”的实施。
              </div>
            </div>

            <div>
              <div class="little-title">2.产品特色</div>
              <div>
                <ul>
                  <li>
                    使用的机器学习模型的超参数较优，模型能达到很高的预测准确性。
                  </li>
                  <li>
                    产品提升了数据填补的时空分辨率，时间分辨率高达1天，空间分辨率达到了0.01°×0.01°（1km网格）
                  </li>
                  <li>
                    产品在高维空间中插值，较传统的基于地统计的克里金插值法有更高的准确性和更好的插值效果。
                  </li>
                  <li>
                    项目具有成熟的CO2实时监测网络，能自动更新日尺度CO2的时空分布情况。
                  </li>
                  <li>
                    产品能实现未来大气CO2浓度的预测，有助于发现重要的碳源汇信息，对于政策的制定以及减排的措施有良好的参考意义。
                  </li>
                </ul>
              </div>
              <div class="little-title">3.关键技术</div>
              <div>
                <ul>
                  <li>
                    全方位、多方向地选取了可能对于CO2的时空分布有影响的地理协变量，分别用双线性插值法、面积加权法重采样至统一的空间分辨率。
                  </li>
                  <li>
                    通过调节LightGBM模型的max_bin、num_leaves等超参数，更好地拟合训练数据，达到更好的拟合效果。.01°×0.01°（1km网格）
                  </li>
                  <li>
                    使用LightGBM模型对缺测值进行预测填补，并用R语言环境下的空间绘图包在不同时空尺度上可视化填补结果，生成图片与视频格式。
                  </li>
                  <li>
                    通过前端、后端等技术制成网页，构成CO2实时监测、预测体系。
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
@import url("./../style/context.css");
</style>
