import React from 'react'
import {Card, Row, Col} from 'antd';
import style from './index.less'
import qq from '@/assets/icon/qq.svg'
import email from '@/assets/icon/email.svg'

export default class About extends React.Component {
  render() {
    return (
      <div className={style.CardContainer}>
        <Row>
          <Col span={12} offset={6}>
            <Card title="关于">
              <div
                style={{
                  fontSize: 14,
                  color: 'rgba(0, 0, 0, 0.85)',
                  marginBottom: 16,
                  fontWeight: 500,
                  textAlign: 'left'
                }}
              >
                <div>
                  <h3><strong>主要算法：<span>基于遗传算法的TSP求解在大数据中的应用</span></strong></h3>
                  <br/>
                  <br/>
                  <div>
                    <h4><strong>TSP问题：</strong></h4>
                    <div>
                      TSP(Travelling salesman problem): 常译作“旅行商问题”，
                      在本文中的应用：因为要寻找最优的景点并绘制出地图，要到n个景点，每个景点之间都有假设有最优的一条路径和其他所有的景点相连。现在要求从一个景点出发，穿越所有其他景点的城市，再回到出发的景点。
                      出于对服务器性能的考虑，要求计算机便利的路径的长短最短。问能否找到这样的一条路径？
                      首先这是个经典的NP-complete问题。 时间复杂度为θ(n!)。 随着景点的数量和规模不断增大，在有限的时间内得不到问题的最优解。
                      我们只能退而求其次，在有限的时间内(或可接受的时间内)找到一个近似最优解，而且这个近似最优解和最优解的误差我们也是可以接受的。
                      出于这样的考虑，为求解这类问题的启发式，元启发式算法，演化算法营运而生，而在本文中使用了遗传算法进行求解。
                      随着研究的深入，TSP问题已经演化成好多版本。本文的使用java进行代码首先对于对称和非对称的版本都适用。
                    </div>
                    <br/>
                    <h4><strong>编码：</strong></h4>
                    <div>
                      在解实现程序的初始化之前，如何表示一个景点的解即编码是一切的开始。
                      本文中采用随机的方式产生若干个(种群规模)的序列，即产生符合景点的编号的随机数存储在Thread Local的数组中，数组中的元素包含所有的景点的 UUID。
                    </div>
                    <br/>
                    <h4><strong>选择：</strong></h4>
                    <div>
                      在形成一定数量的可行解（染色体）后，需要对这些父代的染色体进行筛选。根据生物遗传的基因的优胜劣汰原则，在筛选染色体的我们也会秉承最优保留原则，使得优异的基因有更多的机会得到遗传。
                    </div>
                    <br/>
                    <h4><strong>适应度函数：</strong></h4>
                    <div>
                      本文我们选择路径长度的倒数来作为解的适应度
                      在这个本文中，我们选择“轮盘赌”算法来筛选染色体。
                      基本原理：首先，计算每个染色体即路径的长度的倒数，再得到所有路径倒数之和，用每条路径的倒数除以所有所有路径倒数之和即为这条路径被选中的概率(路径越短，概率越高)。
                    </div>
                    <br/>
                    <h4><strong>交叉概率：</strong></h4>
                    <div>
                      交叉概率对于解的收敛速度有着重要的影响。由于本文使用的系统有较强的独立性，交叉概率设置0.85为较优。
                    </div>
                    <br/>
                    <h4><strong>变异：</strong></h4>
                    <div>
                      一般的，生物的进化，除了遗传父母的基因，还有自身基因有一定的概率突变。基于这个原理，变异操作在一定的概率上是作用于染色体自身的。
                    </div>
                    <br/>
                    <h4><strong>交叉：</strong></h4>
                    <div>
                      本文我们选择交替位置交叉法（Alternating Position Crossover，APX）来对一对染色体进行交叉操作，其基本原理如下图所示
                      左边为父代的两个染色体，右边为子代染色体。
                      将左上的数组第一个元素放入右上数组的第一位置中，再转移到左下数组第一个元素，查看右上数组是否已经包含了该元素，如果未包含将其插入右上数组中，否则插入右下数组中。接着从左上数组的第二个元素开始，到左下第二个元素，和前次同意的判断操作。如此类推直到右边两个数组都被填满了为止。
                    </div>
                    <br/>
                    <h4><strong>变异概率：</strong></h4>
                    <div>
                      一定的概率师兄自身基因的改变
                      在本文中，我们选择位置倒换法，即染色体上随机的产生两个位置上数值互换。
                    </div>
                    <br/>
                    <h4><strong>终止条件：</strong></h4>
                    <div>
                      一般有两种方式停止交叉，变异的操作。一般可以预先设定迭代次数，或者多次跌代后，解的质量得不到一定的提高，或者解达到预期的要求，这时都可以停止迭代。在本文中我们选择第二种。
                    </div>
                  </div>
                </div>
                <p>
                  联系我：
                  <img src={qq} alt="" style={{
                    width: '25px'
                  }}/>
                  <img src={email} alt="" style={{
                    width: '25px'
                  }}/>
                </p>
                <br/>
                <br/>
                <h3><strong>开源许可:</strong></h3>
                <div>
                  <a href="https://github.com/umijs/umi/blob/master/LICENSE">umi.js开源许可</a><br/>
                  <a href="https://tldrlegal.com/license/mit-license">dva.js开源许可</a><br/>
                  <a href="https://github.com/ant-design/ant-design/blob/master/LICENSE">ant-design开源许可</a><br/>
                  <a href="https://github.com/spring-projects/spring-boot/blob/master/LICENSE.txt">spring boot开源许可</a>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

      </div>
    )
  }
}
