
/* eslint-disable @next/next/no-img-element */

import type { NextPage } from 'next';
import { BaseLayout, NftList } from '@ui';
import { useNetwork } from '@hooks/web3';
import { ExclamationIcon } from '@heroicons/react/solid';

const Home: NextPage = () => {
  const { network } = useNetwork();

  return (
    <BaseLayout>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">琳琅振响 十方肃清 河海静默 山岳吞烟</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
               万灵镇伏 招集群仙 天无氛秽 地五妖尘 冥慧洞清 大量玄玄也
            </p>
          </div>
          { network.isConnectedToNetwork ?
            <NftList /> :
            <div className="rounded-md bg-yellow-50 p-4 mt-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <ExclamationIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">链上信息错误</h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                    { network.isLoading ?
                      "载入中..." :
                      `请连接到 ${network.targetNetwork}`
                    }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </BaseLayout>
  )
}

export default Home