import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import moment from "moment";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Checkbox,
  message,
} from "antd";
import apis from "../../utils/apis/apis";

const { TextArea } = Input;

const FormDisabledDemo = function (props: { x: string; setShow: any }) {
  const [key, setKey] = useState("financeList");
  useEffect(() => {
    console.log("props.x", props.x);
    setKey(props.x.trim());
  }, []);

  //提交函数
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const onFinish = (values: any) => {
    //处理时间格式
    if (values.time) {
      values.time = moment(values.time).format("YYYY-MM-DD");
    } else if (values.month) {
      values.month = moment(values.month).format("YYYY-MM");
    }
    console.log("Success:", values);
    //根据取得的key值调用接口
    switch (props.x.trim()) {
      case "financeList":
        apis.addFinancialList(values).then((res) => {
          if (res.data.code == 200) {
            message.open({
              content: res.data.msg,
              duration: 1.5,
              type: "success",
            });
          } else {
            message.open({
              content: res.data.msg,
              duration: 1.5,
              type: "error",
            });
          }
        });
        console.log("fffff");

        break;
      case "oil":
        apis.addOliList(values).then((res) => {
          if (res.data.code == 200) {
            message.open({
              content: res.data.msg,
              duration: 1.5,
              type: "success",
            });
          } else {
            message.open({
              content: res.data.msg,
              duration: 1.5,
              type: "error",
            });
          }
        });
        console.log("ooooo");

        break;
      case "waveBox":
        apis.addWavesList(values).then((res) => {
          if (res.data.code == 200) {
            message.open({
              content: res.data.msg,
              duration: 1.5,
              type: "success",
            });
          } else {
            message.open({
              content: res.data.msg,
              duration: 1.5,
              type: "error",
            });
          }
        });
        console.log("wwwwww");

        break;
      default:
        console.log("dddd");
        break;
    }
    props.setShow(false);
  };

  switch (key) {
    case "financeList ":
      return (
        <div
          style={{
            position: "absolute",
            zIndex: "999",
            backgroundColor: "white",
            height: "800px",
            width: " 800px",
            left: "50%",
            translate: "-50%",
            top: "20%",
          }}
        >
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 600 }}
            onFinishFailed={onFinishFailed}
            onFinish={onFinish}
          >
            {/* 选择时间 */}
            <Form.Item label="选择时间" name="time">
              <DatePicker format={"YYYY-QQ"} />
            </Form.Item>
            {/* 选择月份 */}
            <Form.Item label="选择月份" name="month">
              <DatePicker picker="month" format={"YYYY-MM"} />
            </Form.Item>
            {/* 选择付款人 */}
            <Form.Item label="选择付款人" name="payer">
              <Select>
                <Select.Option value="lai">赖敏</Select.Option>
                <Select.Option value="cai">蔡强</Select.Option>
              </Select>
            </Form.Item>
            {/* 选择收款人 */}
            <Form.Item label="选择收款人" name="payee">
              <Select>
                <Select.Option value="赖敏">赖敏</Select.Option>
                <Select.Option value="蔡强">蔡强</Select.Option>
              </Select>
            </Form.Item>
            {/* 付款方式 */}
            <Form.Item label="选择付款方式" name="payway">
              <Select>
                <Select.Option value="微信">微信</Select.Option>
                <Select.Option value="支付宝">支付宝</Select.Option>
                <Select.Option value="现金">现金</Select.Option>
              </Select>
            </Form.Item>
            {/* 备用金收入金额 */}
            <Form.Item label="备用金收入金额" name="in">
              <InputNumber />
            </Form.Item>
            {/* 备用金指出金额 */}
            <Form.Item label="备用金支出金额" name="out">
              <InputNumber />
            </Form.Item>
            {/* 用途 */}
            <Form.Item label="用途" name="usefor">
              <TextArea rows={2} />
            </Form.Item>
            {/* 报销人 */}
            <Form.Item label="报销人" name="reimbursers">
              <Select>
                <Select.Option value="赖敏">赖敏</Select.Option>
                <Select.Option value="蔡强">蔡强</Select.Option>
                <Select.Option value="周树文">周树文</Select.Option>
                <Select.Option value="刘浪">刘浪</Select.Option>
                <Select.Option value="方晓勇">方晓勇</Select.Option>
                <Select.Option value="王从林">王从林</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="类别" name="category">
              <Select>
                <Select.Option value="管理费用">管理费用</Select.Option>
                <Select.Option value="贷款">贷款</Select.Option>
                <Select.Option value="运费">运费</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="点击添加">
              <Button type="primary" htmlType="submit">
                点击添加
              </Button>
            </Form.Item>
          </Form>
        </div>
      );
    case "oil":
      return (
        <div
          style={{
            position: "absolute",
            zIndex: "999",
            backgroundColor: "white",
            height: "1000px",
            width: " 800px",
            left: "50%",
            translate: "-50%",
            top: "20%",
          }}
        >
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            style={{ maxWidth: 600, margin: "30px auto" }}
            onFinishFailed={onFinishFailed}
            onFinish={onFinish}
          >
            {/* 选择时间 */}
            <Form.Item label="销售时间" name="time">
              <DatePicker format={"YYYY-QQ"} />
            </Form.Item>
            {/* 选择负责人 */}
            <Form.Item label="选择负责人" name="head">
              <Select>
                <Select.Option value="lai">赖敏</Select.Option>
                <Select.Option value="cai">蔡强</Select.Option>
              </Select>
            </Form.Item>
            {/* 单位 */}
            <Form.Item label="单位" name="unit">
              <TextArea rows={1} />
            </Form.Item>
            {/* 型号 */}
            <Form.Item label="型号" name="model">
              <TextArea rows={1} />
            </Form.Item>
            {/* 数量L */}
            <Form.Item label="数量L" name="count">
              <InputNumber />
            </Form.Item>
            {/* 价格 */}
            <Form.Item label="价格" name="price">
              <InputNumber />
            </Form.Item>
            {/* 计划销售 */}
            <Form.Item label="计划销售" name="Plan_sales">
              <InputNumber />
            </Form.Item>
            {/* 实际销售 */}
            <Form.Item label="实际销售" name="real_sales">
              <InputNumber />
            </Form.Item>
            {/* 优惠折扣 */}
            <Form.Item label="优惠折扣" name="Discounts">
              <InputNumber />
            </Form.Item>
            {/* 选择收款时间 */}
            <Form.Item label="收款时间" name="getTime">
              <DatePicker />
            </Form.Item>
            {/* 选择收款月份 */}
            <Form.Item label="收款月份" name="getMonth">
              <DatePicker picker="month" format={"YYYY-MM"} />
            </Form.Item>
            {/* 未收货款 */}
            <Form.Item label="收款金额" name="collection">
              <InputNumber />
            </Form.Item>
            {/* 收款方式 */}
            <Form.Item label="收款方式" name="payway">
              <Select>
                <Select.Option value="微信">微信</Select.Option>
                <Select.Option value="支付宝">支付宝</Select.Option>
                <Select.Option value="现金">现金</Select.Option>
              </Select>
            </Form.Item>
            {/* 收款人 */}
            <Form.Item label="收款人" name="payee">
              <Select>
                <Select.Option value="赖敏">赖敏</Select.Option>
                <Select.Option value="蔡强">蔡强</Select.Option>
              </Select>
            </Form.Item>
            {/* 未收货款 */}
            <Form.Item label="未收货款" name="Uncollected_amount">
              <InputNumber />
            </Form.Item>
            {/* 冲抵贷款 */}
            <Form.Item label="冲抵贷款" name="off_price">
              <InputNumber />
            </Form.Item>
            {/* 备注 */}
            <Form.Item label="备注" name="remark">
              <TextArea rows={2} />
            </Form.Item>
            <Form.Item label="点击添加">
              <Button type="primary" htmlType="submit">
                点击添加
              </Button>
            </Form.Item>
          </Form>
        </div>
      );
    case "waveBox":
      return (
        <div
          style={{
            position: "absolute",
            zIndex: "999",
            backgroundColor: "white",
            height: "900px",
            width: " 800px",
            left: "50%",
            translate: "-50%",
            top: "20%",
          }}
        >
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: 600, margin: "30px auto" }}
            onFinishFailed={onFinishFailed}
            onFinish={onFinish}
          >
            {/* 选择时间 */}
            <Form.Item label="进厂日期" name="in_time">
              <DatePicker format={"YYYY-QQ"} />
            </Form.Item>
            {/* 负责人 */}
            <Form.Item label="负责人" name="Head">
              <Select>
                <Select.Option value="方晓勇">方晓勇</Select.Option>
                <Select.Option value="蔡强">蔡强</Select.Option>
                <Select.Option value="张">张</Select.Option>
              </Select>
            </Form.Item>
            {/* 车主 */}
            <Form.Item label="车主" name="owner">
              <TextArea rows={1} />
            </Form.Item>
            {/* 型号 */}
            <Form.Item label="型号" name="mode">
              <TextArea rows={1} />
            </Form.Item>
            {/* 波箱型号 */}
            <Form.Item label="波箱型号" name="Gearbox_model">
              <TextArea rows={1} />
            </Form.Item>
            {/* 车牌号 */}
            <Form.Item label="车牌号" name="license_plate">
              <TextArea rows={1} />
            </Form.Item>
            {/* 费用 */}
            <Form.Item label="费用" name="cost">
              <InputNumber />
            </Form.Item>
            {/* 细节 */}
            <Form.Item label="细节" name="detail">
              <TextArea rows={2} />
            </Form.Item>
            {/* 出厂日期 */}
            <Form.Item label="出厂日期" name="out_time">
              <DatePicker format={"YYYY-QQ"} />
            </Form.Item>
            {/* 还款金额 */}
            <Form.Item label="还款金额" name="Collection">
              <InputNumber />
            </Form.Item>
            {/* 还款时间 */}
            <Form.Item label="还款时间" name="getMoneyTime">
              <DatePicker format={"YYYY-QQ"} />
            </Form.Item>
            {/* 还款月份 */}
            <Form.Item label="还款月份" name="getMoneyMonth">
              <DatePicker format={"YYYY-QQ"} picker={"month"} />
            </Form.Item>
            {/* 报销人 */}
            <Form.Item label="报销人" name="reimbursers">
              <Select>
                <Select.Option value="赖敏">赖敏</Select.Option>
                <Select.Option value="蔡强">蔡强</Select.Option>
                <Select.Option value="周树文">周树文</Select.Option>
                <Select.Option value="刘浪">刘浪</Select.Option>
                <Select.Option value="方晓勇">方晓勇</Select.Option>
                <Select.Option value="王从林">王从林</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="类别" name="category">
              <Select>
                <Select.Option value="管理费用">管理费用</Select.Option>
                <Select.Option value="贷款">贷款</Select.Option>
                <Select.Option value="运费">运费</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="点击添加">
              <Button type="primary" htmlType="submit">
                点击添加
              </Button>
            </Form.Item>
          </Form>
        </div>
      );
    default:
      return (
        <div
          style={{
            position: "absolute",
            zIndex: "999",
            backgroundColor: "white",
            height: "800px",
            width: " 800px",
            left: "50%",
            translate: "-50%",
            top: "20%",
          }}
        >
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            style={{ maxWidth: 600, margin: "100px auto" }}
            onFinishFailed={onFinishFailed}
            onFinish={onFinish}
          >
            {/* 选择时间 */}
            <Form.Item label="选择时间" name="time">
              <DatePicker format={"YYYY-QQ"} />
            </Form.Item>
            {/* 选择月份 */}
            <Form.Item label="选择月份" name="month">
              <DatePicker picker="month" format={"YYYY-MM"} />
            </Form.Item>
            {/* 选择付款人 */}
            <Form.Item label="选择付款人" name="payer">
              <Select>
                <Select.Option value="lai">赖敏</Select.Option>
                <Select.Option value="cai">蔡强</Select.Option>
              </Select>
            </Form.Item>
            {/* 选择收款人 */}
            <Form.Item label="选择收款人" name="payee">
              <Select>
                <Select.Option value="赖敏">赖敏</Select.Option>
                <Select.Option value="蔡强">蔡强</Select.Option>
              </Select>
            </Form.Item>
            {/* 付款方式 */}
            <Form.Item label="选择付款方式" name="payway">
              <Select>
                <Select.Option value="微信">微信</Select.Option>
                <Select.Option value="支付宝">支付宝</Select.Option>
                <Select.Option value="现金">现金</Select.Option>
              </Select>
            </Form.Item>
            {/* 备用金收入金额 */}
            <Form.Item label="备用金收入金额" name="in">
              <InputNumber />
            </Form.Item>
            {/* 备用金指出金额 */}
            <Form.Item label="备用金支出金额" name="out">
              <InputNumber />
            </Form.Item>
            {/* 用途 */}
            <Form.Item label="用途" name="usefor">
              <TextArea rows={2} />
            </Form.Item>
            {/* 还款方式 */}
            <Form.Item label="还款方式" name="payway">
              <Select>
                <Select.Option value="微信">微信</Select.Option>
                <Select.Option value="支付宝">支付宝</Select.Option>
                <Select.Option value="现金">现金</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="收款人" name="payee">
              <Select>
                <Select.Option value="方晓勇">方晓勇</Select.Option>
                <Select.Option value="蔡强">蔡强</Select.Option>
                <Select.Option value="张">张</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="点击添加">
              <Button type="primary" htmlType="submit">
                点击添加
              </Button>
            </Form.Item>
          </Form>
        </div>
      );
  }
};

export default FormDisabledDemo;